import os
import shutil
import streamlit as st
import tempfile
import openpyxl

def read_keywords_from_excel(excel_file_path):
    wb = openpyxl.load_workbook(excel_file_path, data_only=True)
    sheet = wb.active
    keywords = []
    for row in sheet.iter_rows(min_row=1, max_col=1, values_only=True):
        if row[0] is not None:
            keyword = str(row[0]).strip()
            if keyword:
                keywords.append(keyword)
    return keywords

def copy_with_duplicate_handling(src, dest_folder):
    base_name = os.path.basename(src)
    dest_path = os.path.join(dest_folder, base_name)
    if os.path.exists(dest_path):
        name, ext = os.path.splitext(base_name)
        counter = 1
        new_name = f"{name} ({counter}){ext}"
        dest_path = os.path.join(dest_folder, new_name)
        while os.path.exists(dest_path):
            counter += 1
            new_name = f"{name} ({counter}){ext}"
            dest_path = os.path.join(dest_folder, new_name)
    shutil.copy(src, dest_path)
    return dest_path

def main():
    st.title("关键词文件复制工具")

    st.markdown("""
    - 上传包含关键词的 Excel 文件（关键词在第一列）
    - 输入搜索文件的根目录路径（例如：`D:/Documents/SearchFolder`）
    - 输入目标文件夹路径（例如：`D:/Documents/TargetFolder`）
    - 点击开始复制匹配文件
    """)

    excel_file = st.file_uploader("上传 Excel 文件 (.xlsx)", type=["xlsx"])
    search_root = st.text_input("搜索根目录路径")
    dest_folder = st.text_input("目标保存文件夹路径")

    if st.button("开始复制"):
        if not excel_file:
            st.error("请上传 Excel 文件！")
            return
        if not search_root or not os.path.isdir(search_root):
            st.error("请输入有效的搜索根目录路径！")
            return
        if not dest_folder or not os.path.isdir(dest_folder):
            st.error("请输入有效的目标保存文件夹路径！")
            return

        # 将上传的文件保存到临时文件（openpyxl 需要文件路径）
        with tempfile.NamedTemporaryFile(delete=False, suffix=".xlsx") as tmp:
            tmp.write(excel_file.read())
            tmp_path = tmp.name

        keywords = read_keywords_from_excel(tmp_path)
        if not keywords:
            st.error("Excel 文件中未读取到关键词！")
            return

        keywords = [kw.lower() for kw in keywords]

        count_copied = 0
        progress_bar = st.progress(0)
        total_files = sum(len(files) for _, _, files in os.walk(search_root))
        processed_files = 0

        for dirpath, _, filenames in os.walk(search_root):
            for file in filenames:
                file_base = os.path.splitext(file)[0].lower()
                if any(keyword in file_base for keyword in keywords):
                    src_path = os.path.join(dirpath, file)
                    try:
                        copy_with_duplicate_handling(src_path, dest_folder)
                        count_copied += 1
                    except Exception as e:
                        st.warning(f"复制文件 {src_path} 出错: {e}")
                processed_files += 1
                progress_bar.progress(min(processed_files / total_files, 1.0))

        st.success(f"完成！共复制了 {count_copied} 个文件。")

if __name__ == "__main__":
    main()
