import os
import re

def get_project_root():
    """Find the project root directory containing docusaurus.config.ts or package.json."""
    current_dir = os.path.dirname(os.path.abspath(__file__))
    while current_dir != os.path.dirname(current_dir):  # Stop at root
        if os.path.exists(os.path.join(current_dir, 'docusaurus.config.ts')) or \
           os.path.exists(os.path.join(current_dir, 'package.json')):
            return current_dir
        current_dir = os.path.dirname(current_dir)
    raise FileNotFoundError("Could not find project root (containing docusaurus.config.ts or package.json)")

def rename_files_with_spaces_or_underscores():
    # Get the project root and set assets directory
    project_root = get_project_root()
    assets_dir = os.path.join(project_root, 'assets')
    
    # Verify assets directory exists
    if not os.path.isdir(assets_dir):
        raise FileNotFoundError(f"Assets directory not found at {assets_dir}")
    
    print(f"Processing files in: {assets_dir}")
    
    # Walk through assets directory and its subdirectories
    for root, _, files in os.walk(assets_dir):
        for file in files:
            # Check if file is a .md file and contains spaces or underscores
            if file.endswith('.md') and (' ' in file or '_' in file):
                # Replace both spaces and underscores with hyphens
                new_file = re.sub(r'[\s_]+', '-', file)
                old_path = os.path.join(root, file)
                new_path = os.path.join(root, new_file)
                
                # Show proposed change with only filenames
                print("---")
                print(f"Old name: {file}")
                print(f"New name: {new_file}")
                print("---")
                
                # Ask for confirmation
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
        print("\nRenaming process complete.")
    except FileNotFoundError as e:
        print(f"Error: {e}")
    except Exception as e:
        print(f"Unexpected error: {e}")