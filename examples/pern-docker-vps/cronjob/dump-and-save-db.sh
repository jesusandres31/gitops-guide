#!/bin/sh

# SET VARS...
DATE=$(date +'%Y%m%d')
ROOT_PATH=.
FOLDER_ID=redacted
BACKUP_NAME="testapp_db_bkp_$DATE"
DB_CONT_NAME=testapp_db
DB_NAME=testapp
COMPRESSED_BKP_FILE="$ROOT_PATH/$BACKUP_NAME.tar.gz"
REMOTE_NAME=gdrive  # Replace with your rclone remote name
DRIVE_PATH=  # Replace with the path in your Google Drive where you want to store the backup
REMOTE_BKP_PATH=${REMOTE_NAME}:${DRIVE_PATH}

# SCRIPT STARTS...
# dump db from container
echo "Dumping database..."
sudo docker exec -i ${DB_CONT_NAME} pg_dump -U postgres -d ${DB_NAME} > ${ROOT_PATH}/db_dump.sql

# compress file
echo "Compressing file..."
tar cvzf $COMPRESSED_BKP_FILE -P ${ROOT_PATH}/db_dump.sql

echo "Uploading to Google Drive..."
# use rclone to copy the compressed backup to Google Drive
rclone copy $COMPRESSED_BKP_FILE "$REMOTE_BKP_PATH"

# Check the number of files in the backup folder
echo "Checking number of files in the backup folder..."
FILE_COUNT=$(rclone ls "$REMOTE_BKP_PATH" | wc -l)

# If there are more than 10 files, delete the oldest one
if [ $FILE_COUNT -gt 10 ]; then
  echo "More than 10 files found. Deleting the oldest one..."
  OLDEST_FILE=$(rclone ls "$REMOTE_BKP_PATH" | sort -k 1,1n | head -n 1 | awk '{print $NF}')
  rclone delete "$REMOTE_BKP_PATH/$OLDEST_FILE"
fi

# remove temp files
echo "Removing temp files..."
sudo rm ${ROOT_PATH}/db_dump.sql $COMPRESSED_BKP_FILE

echo "Done!"
