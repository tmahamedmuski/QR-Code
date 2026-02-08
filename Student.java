package practice_java;

public class Student {
	private String name; int age; String studentID;
	
	//getter method
	public String getName() {
		return name;
	}
	
	public int getAge() {
		return age;
	}
	public String getStudentID() {
		return studentID;
	}
	
	// setter method
	public void setName(String name){
		this.name = name;
	}
	
	public void setAge(int age){
		if(age>0) {
			this.age = age;
		}
	}
	
	public void setStudentID(String studentID){
		if(studentID != null) {
			this.studentID = studentID;
		}
	}
	
	public class Main {
	    public static void main(String[] args) {
	        Student student = new Student();
	        student.setName("yaas");
	        student.setAge(28);
	        student.setStudentID("yaas123");

	        System.out.println("Student Details:");
	        System.out.println("Name: " + student.getName());
	        System.out.println("Age: " + student.getAge());
	        System.out.println("StudentID: " + student.getStudentID());
	    }
	}
	
	
}
