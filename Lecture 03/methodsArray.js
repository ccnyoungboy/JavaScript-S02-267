let arr1 = ["A", true, 2];

// Push and pop
console.log("\n********Push and pop********\n");
console.log(arr1.push("new value")); // เพิ่มค่า "new value" ที่ท้าย array และคืนค่า length ใหม่
console.log(arr1); // แสดง array ที่อัปเดตแล้ว
console.log(arr1.pop()); // ลบค่าที่ท้าย array (คืนค่า "new value")
console.log(arr1); // แสดง array หลังจากลบค่าออก

// Shift and unshift
console.log("\n********Shift and unshift********\n");
console.log(arr1.unshift("new value")); // เพิ่มค่า "new value" ที่จุดเริ่มต้นของ array และคืนค่า length ใหม่
console.log(arr1); // แสดง array ที่อัปเดตแล้ว
console.log(arr1.shift()); // ลบค่าที่จุดเริ่มต้นของ array (คืนค่า "new value")
console.log(arr1); // แสดง array หลังจากลบค่าออก