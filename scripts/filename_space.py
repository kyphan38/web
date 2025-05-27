import os
import re

def get_project_root():
  current_dir = os.path.dirname(os.path.abspath(__file__))
  while current_dir != os.path.dirname(current_dir):
    if os.path.exists(os.path.join(current_dir, 'docusaurus.config.ts')) or \
       os.path.exists(os.path.join(current_dir, 'package.json')):
      return current_dir
    current_dir = os.path.dirname(current_dir)
  raise FileNotFoundError("Could not find project root (containing docusaurus.config.ts or package.json)")

def rename_files_with_spaces_or_underscores():
  project_root = get_project_root()
  assets_dir = os.path.join(project_root, 'assets')
  
  if not os.path.isdir(assets_dir):
    raise FileNotFoundError(f"Assets directory not found at {assets_dir}")
  
  print(f"Processing files in: {assets_dir}")
  
  for root, _, files in os.walk(assets_dir):
    for file in files:
      if file.endswith('.md') and (' ' in file or '_' in file):
        new_file = re.sub(r'[\s_]+', '-', file)
        old_path = os.path.join(root, file)
        new_path = os.path.join(root, new_file)
        
        print("---")
        print(f"Old name: {file}")
        print(f"New name: {new_file}")
        print("---")
        
        confirm = input("Press Enter to rename, or 'no' to skip: ")
        
        if confirm.lower() != 'no':
          try:
            os.rename(old_path, new_path)
            print(f"Renamed: {file} -> {new_file}")
          except Exception as e:
            print(f"Error renaming {file}: {e}")
        else:
          print(f"Skipping rename for {file}")

if __name__ == "__main__":
  try:
    rename_files_with_spaces_or_underscores()
    print("\nRenaming process complete")
  except FileNotFoundError as e:
    print(f"Error: {e}")
  except Exception as e:
    print(f"Unexpected error: {e}")