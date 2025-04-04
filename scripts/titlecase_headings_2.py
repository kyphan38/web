import os
from titlecase import titlecase

script_dir = os.path.dirname(os.path.abspath(__file__))
current_dir = os.path.normpath(os.path.join(script_dir, "..", "assets"))

for root, _, files in os.walk(current_dir):
  for file in files:
    if file.endswith(".md"):
      file_path = os.path.join(root, file)
      with open(file_path, "r", encoding="utf-8") as f:
        content = f.readlines()
  
      has_changes = False
      updated_lines = content.copy()

      for idx, line in enumerate(content):
        line = line.strip()
        if line.startswith(("## ", "###")):
          # heading_text = line.strip()[3:]
          if line.startswith("## "):
            heading_text = line[3:]
            prefix = "## "
          else:
            heading_text = line[4:]
            prefix = "### "

          capitalized_text = titlecase(heading_text)

          if heading_text != capitalized_text:
            print("---")
            print(f"{file_path}")
            print(heading_text)
            print(capitalized_text)
            print("---")

            confirm = input("Press Enter to change, or 'no' to skip: ")
            if confirm.lower() != 'no':
              updated_lines[idx] = f"{prefix}{capitalized_text}\n"
              has_changes = True
            else:
              print("Skipping change")
      if has_changes:
        with open(file_path, "w", encoding="utf-8") as f:
          f.writelines(updated_lines)
      else:
        print(f"INFO: No changes in {file_path}\n")