using System.ComponentModel.DataAnnotations;

namespace Class_Assignment_1
{
    internal class Program
    {
        public class Patient
        {
            public int PatientId;
            public String PatientName;
            public byte Age;
            public String Disease;
          
            public void Display()
            {
                Console.WriteLine($"PatientId: {PatientId}" + $"PatientName: {PatientName}" + $"Age: {Age}" + $"Disease: {Disease}");
            }

        }
       
        static void Main(string[] args)
        {
            Patient p1 = new Patient();
            p1.PatientId = 1;
            p1.PatientName = "Joe";
            p1.Age = 22;
            p1.Disease = "TB";
            Console.WriteLine(" ");
            p1.Display();
        }
    }
}
