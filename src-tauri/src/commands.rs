// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/

#[tauri::command]
pub fn list_files(path: String) -> Result<Vec<String>, String> {
    let path = std::path::Path::new(&path);

    if !path.is_dir() {
        return Ok(Vec::new());
    }

    let entries = std::fs::read_dir(path).map_err(|e| e.to_string())?;

    let mut files: Vec<String> = Vec::new();
    for entry in entries {
        let entry = entry.map_err(|e| e.to_string())?;
        files.push(entry.file_name().to_string_lossy().into_owned());
    }

    Ok(files)
}
