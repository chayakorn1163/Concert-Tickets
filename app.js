        const readline = require("readline");
        const { performance } = require("perf_hooks");

        function ConcertTickets(availableTickets, customerBudgets) {
        let ticketNameMap = new Map();

        // เพิ่มข้อมูลราคาตั๋วลงใน ฟังชันก์ Map
        for (let price of availableTickets) {
            if (ticketNameMap.has(price)) {
            ticketNameMap.set(price, ticketNameMap.get(price) + 1);
            } else {
            ticketNameMap.set(price, 1);
            }
        }

        // เรียงลำดับราคาตั๋วจากน้อยไปมาก
        let sortedTicketPrices = Array.from(ticketNameMap.keys()).sort(
            (a, b) => a - b
        );

        let results = [];

        // สำหรับลูกค้าแต่ละคน ค้นหาตั๋วที่ดีที่สุดตามงบประมาณ
        for (let maxPrice of customerBudgets) {
            let index = findFloor(sortedTicketPrices, maxPrice);
                if (index === -1) {
                    results.push(-1); // ไม่มีตั๋วที่สามารถซื้อได้
                    } else {
                    let ticketPrice = sortedTicketPrices[index];
                    results.push(ticketPrice);

            // อัพเดตจำนวนตั๋วที่เหลืออยู่
            if (ticketNameMap.get(ticketPrice) === 1) {
                ticketNameMap.delete(ticketPrice);
                sortedTicketPrices.splice(index, 1); // ลบราคาตั๋วออกจากลิสต์ที่เรียงแล้ว
            } else {
                ticketNameMap.set(ticketPrice, ticketNameMap.get(ticketPrice) - 1);
            }
            }
        }

        // แสดงผลลัพธ์
        console.log(results.join("\n"));
        }

        // ฟังก์ชันค้นหาราคาตั๋วที่ใกล้เคียงหรือต่ำกว่างบลูกค้า
        function findFloor(sortedArr, target) {
        let low = 0,
            high = sortedArr.length - 1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (sortedArr[mid] === target) {
                return mid;
                    } else if (sortedArr[mid] < target) {
                        low = mid + 1;
                        } else {
                        high = mid - 1;
                        }
        }
        return high;
        }

        // ตัวอย่างข้อมูล
        const availableTickets = [20, 30, 40, 50, 60];
        const customerBudgets = [45, 60, 20];

        // จัดการ input ผ่าน readline
        let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        });

        let input = [];
        rl.on("line", (line) => {
        input.push(line);
        });

        rl.on("close", () => {
        const [n, m] = input[0].split(" ").map(Number); // จำนวนตั๋วและลูกค้า
        const availableTickets = input[1].split(" ").map(Number); // ราคาตั๋ว
        const customerBudgets = input[2].split(" ").map(Number); // งบของลูกค้า

        ConcertTickets(availableTickets, customerBudgets);
        });
