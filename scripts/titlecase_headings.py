import os
from titlecase import titlecase

# --- Configuration ---
# The script starts two directories up from its own location and looks for an 'assets' folder.
# You can change 'current_dir' to a specific path if your markdown files are elsewhere.
# For example: current_dir = "/path/to/your/markdown/files"
script_dir = os.path.dirname(os.path.abspath(__file__))
current_dir = os.path.normpath(os.path.join(script_dir, "..", "assets"))

# --- Main Logic ---
def process_markdown_files(directory):
  """
  Walks through a directory, finds markdown files, and processes their headings.
  """
  for root, _, files in os.walk(directory):
    for file in files:
      if file.endswith(".md"):
        file_path = os.path.join(root, file)
        process_file(file_path)

def process_file(file_path):
  """
  Reads a single markdown file and corrects the headings.
  """
  try:
    with open(file_path, "r", encoding="utf-8") as f:
      lines = f.readlines()
  except Exception as e:
    print(f"Error reading {file_path}: {e}")
    return

  updated_lines = lines[:]
  has_changes = False

  for i, line in enumerate(lines):
    stripped_line = line.strip()

    if stripped_line.startswith("## ") or stripped_line.startswith("### "):
      # Determine the prefix ("## " or "### ")
      prefix = "## " if stripped_line.startswith("## ") else "### "
      
      # Get the original heading text, excluding the prefix
      original_heading_text = stripped_line[len(prefix):]
      
      # Strip quotes
      unquoted_text = original_heading_text
      if (unquoted_text.startswith('"') and unquoted_text.endswith('"')) or \
         (unquoted_text.startswith("'") and unquoted_text.endswith("'")):
        unquoted_text = unquoted_text[1:-1]

      # Apply title case to the unquoted text
      final_text = titlecase(unquoted_text)

      # If the final text is different from the original, prompt for a change
      if original_heading_text != final_text:
        print("---")
        print(f"File: {file_path}")
        print(f"Original: {prefix}{original_heading_text}")
        print(f"Proposed: {prefix}{final_text}")
        print("---")
        
        try:
          confirm = input("Press Enter to apply change, or 'no' to skip: ")
          if confirm.lower() not in ['no', 'n']:
            # Preserve original line ending
            line_ending = '\n' if not line.endswith('\r\n') else '\r\n'
            updated_lines[i] = f"{prefix}{final_text}{line_ending}"
            has_changes = True
            print("Change applied.")
          else:
            print("Skipped change.")
        except KeyboardInterrupt:
          print("\nExiting script.")
          return

  if has_changes:
    try:
      with open(file_path, "w", encoding="utf-8") as f:
        f.writelines(updated_lines)
      print(f"SUCCESS: Updated {file_path}\n")
    except Exception as e:
      print(f"Error writing to {file_path}: {e}")
  else:
    print(f"INFO: No changes needed in {file_path}\n")


if __name__ == "__main__":
  if not os.path.isdir(current_dir):
    print(f"Error: The directory '{current_dir}' does not exist.")
    print("Please check the 'current_dir' variable in the script.")
  else:
    process_markdown_files(current_dir)