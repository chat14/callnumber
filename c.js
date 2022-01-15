เรียนสร้างคลาสอย่างง่ายและวิธีเรียกดู
public class Dog {
    // กำหนดคุณสมบัติ(Field)
    String Name;
    String Breed;

    // Constructor
    Dog() {
    }

    // Method สำหรับ กำหนดชื่อสุนัข
    public void setName(String name) {
        Name = name;
    }

    // Method สำหรับ กำหนดสายพันธุ์
    public void setBreed(String breed) {
        Breed = breed;
    }

    // Method สำหรับไว้ให้เรียกดูชื่อสุนัข
    public String getName() {
        return Name;
    }

    // Method สำหรับไว้ให้เรียกดูสายพันธุ์สุนัข
    public String getBreed() {
        return Breed;
    }
}
