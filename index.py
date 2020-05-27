import gspread
from oauth2client.service_account import ServiceAccountCredentials

SCOPES = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive.file', 'https://www.googleapis.com/auth/drive']
CREDS = ServiceAccountCredentials.from_json_keyfile_name('keys.json', SCOPES)
CLIENT = gspread.authorize(CREDS)
SPREADSHEET_ID = '18NmM9GqkKHkeysfgG3_ljjypDbdwuFQG7gec4lxWhGQ'
RANGE = '2020 Logs'
SHEET_NAME = 'Listen Log'
WORKING_SHEET = CLIENT.open(SHEET_NAME).sheet1
ROW_INPUT_DATA = [
    'Cauldron Black Ram',
    'Slaver',
    'Death/Thrash',
    'Full Length',
    'Australia',
    'https://listen.20buckspin.com/album/slaver'
]

def main():
    print(readAllData())
    # appendRow(ROW_INPUT_DATA)
    print(getLastRecord())

def appendRow(rowInputData):
    WORKING_SHEET.append_row(rowInputData)
    print('Row appended')

def readAllData():
    allData = WORKING_SHEET.get_all_records()
    # print(allData)
    return allData

def getLastRecord():
    # rowCount = list(filter(None, WORKING_SHEET.col_values(1)))
    rowCount = len(readAllData())
    print(rowCount)
    # rowCountNum = len(rowCount)
    lastRecord = WORKING_SHEET.row_values(rowCount + 1)
    return lastRecord

if __name__ == '__main__':
    main()
