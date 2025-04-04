import os
import re

script_dir = os.path.dirname(os.path.abspath(__file__))
current_dir = os.path.normpath(os.path.join(script_dir, "..", "assets"))

# Define the conversions
conversions = {
    "’": "'",
    "–": "-",
    '."': '"'
}

# Define regex patterns
patterns = [
    r'(?<!etc)(?<![:.])\.$',  # Matches a single '.' unless it follows 'etc' or multiple dots
    r'(?<!:):$'               # Matches a single ':' unless part of '::'
]


for root, _, files in os.walk(current_dir):
    for file in files:
        if file.endswith(".md"):
            file_path = os.path.join(root, file)
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
            
            has_changes = False
            updated_content = content

            # Apply regex replacements
            for pattern in patterns:
                new_content = re.sub(pattern, '', updated_content, flags=re.MULTILINE)
                if new_content != updated_content:
                    updated_content = new_content
                    has_changes = True

            # Apply character conversions
            for old, new in conversions.items():
                if old in updated_content:
                    updated_content = updated_content.replace(old, new)
                    has_changes = True

            # Write changes if any were made
            if has_changes:
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(updated_content)
                print(f"Updated: {file_path}")
            else:
                print(f"No changes needed: {file_path}")