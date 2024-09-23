# Concert Tickets

![image](https://github.com/user-attachments/assets/9cb6fd76-93b1-45c7-a0a0-5bfff75b2384)



## โลจิกและแนวทางการคิด

### 1. โครงสร้างข้อมูล
- **Map**: ใช้ `Map` ในการเก็บข้อมูลราคาตั๋วและจำนวนที่มีอยู่ ซึ่งช่วยในการติดตามตั๋วที่มีอยู่ได้อย่างมีประสิทธิภาพและอัปเดตข้อมูลได้อย่างรวดเร็ว

### 2. การจัดการตั๋ว
- **เพิ่มข้อมูลตั๋วลงใน Map**: 
  - ทำการวนลูปผ่านรายการตั๋วที่มีอยู่ และเพิ่มข้อมูลลงใน `ticketNameMap` 
  - หากราคาตั๋วมีอยู่แล้วใน Map ให้เพิ่มจำนวนขึ้น; ถ้าไม่มีก็ให้เพิ่มเข้ามาพร้อมจำนวน 1

### 3. การเรียงลำดับ
- **เรียงลำดับราคาตั๋ว**: 
  - ดึงค่า (ราคาตั๋ว) จาก Map และเรียงลำดับในลำดับที่น้อยไปมาก ซึ่งช่วยให้ค้นหาราคาตั๋วที่ดีที่สุดสำหรับลูกค้าได้อย่างมีประสิทธิภาพ

### 4. การประมวลผลลูกค้า
- **ค้นหาตั๋วที่เหมาะสม**: 
  - สำหรับงบประมาณของลูกค้าแต่ละคน ให้ใช้ฟังก์ชันช่วย `findFloor` เพื่อหาตั๋วที่มีราคาสูงสุดที่ไม่เกินงบของลูกค้า
  - หากพบตั๋วที่เหมาะสม จะถูกเพิ่มลงในผลลัพธ์และจำนวนใน Map จะถูกอัปเดต หากจำนวนเหลืออยู่เป็นศูนย์ ราคาตั๋วนั้นจะถูกลบออกจาก Map

### 5. ผลลัพธ์
- หลังจากประมวลผลลูกค้าทั้งหมด ผลลัพธ์จะถูกแสดง โดยแสดงราคาตั๋วที่ลูกค้าสามารถซื้อได้ หรือ `-1` หากไม่มีตั๋วที่สามารถซื้อได้

## วิธีใช้งาน
-รันผ่าน Node.js

## ตัวอย่าง
```bash
5 3
20 30 40 50 60
45 60 20
