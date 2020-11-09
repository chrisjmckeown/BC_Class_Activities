Set objFSO = CreateObject("Scripting.FileSystemObject")

Dim WshShell, strCurDir, row, result

result = MsgBox ("Yes or No?", vbYesNo, "Include Sub Directories?")

Set WshShell = CreateObject("WScript.Shell")
strCurDir = WshShell.CurrentDirectory

Set objExcel = CreateObject("Excel.Application")

row = 1

objExcel.Application.Visible = True
objExcel.Workbooks.Add
objExcel.Cells(row, 1).Value = "Directory Path"
objExcel.Cells(row, 2).Value = "File Name"
objExcel.Cells(row, 3).Value = "File Extension"
objExcel.Cells(row, 4).Value = "Date Created"
objExcel.Cells(row, 5).Value = "Date Modified"
objExcel.Cells(row, 6).Value = "File Size"
row = row + 1

Set objFolder = objFSO.GetFolder(strCurDir)
findInFiles(objFolder)

ShowSubfolders strCurDir

WScript.Echo "Complete"

Sub ShowSubFolders(Folder)
	Set objFolder = objFSO.GetFolder(Folder)
	On Error Resume Next
	If Err.Number = 0 Then
		Select Case result
		Case vbYes
			For Each Subfolder in objFolder.SubFolders
				findInFiles(Subfolder)
				ShowSubFolders Subfolder
			Next
		End Select
	Else
		objExcel.Cells(row, 1).Value =  "Error #" & Err.Number & " " & Err.Description
		Err.Clear
    End If
End Sub

Sub findInFiles(Subfolder)
	On Error Resume Next
	Set objFolder = objFSO.GetFolder(Subfolder.Path)
	Set colFiles = objFolder.Files
	If Err.Number = 0 Then
		For Each objFile in colFiles
			ShowFileInfo(objFile)
		Next
	Else
		objExcel.Cells(row, 1).Value =  "Error #" & Err.Number & " " & Err.Description
		Err.Clear
    End If
End Sub

Function ShowFileInfo(filespec)
	Set f = objFSO.GetFile(filespec)
	objExcel.Cells(row, 1).Value = objFSO.GetParentFolderName(filespec)
	objExcel.Cells(row, 2).Value = objFSO.GetBaseName(filespec)
	objExcel.Cells(row, 3).Value = objFSO.GetExtensionName(filespec.Name)
	objExcel.Cells(row, 4).Value = filespec.DateCreated
	objExcel.Cells(row, 5).Value = filespec.DateLastModified
	objExcel.Cells(row, 6).Value = filespec.Size
	objExcel.Cells(row, 7).Value = filespec
	row = row + 1
End Function
