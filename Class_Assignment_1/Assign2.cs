using System;
using System.Collections.Generic;
using System.Text;

namespace Class_Assignment_1
{
    internal class Assign2
    {
        public class Doctor
        {
            public int DoctorId;
            public String DoctorName;
            public String Specialization;
            public double ConsultationFee;

            public void Display()
            {
                Console.WriteLine(
                    $"DoctorId: {DoctorId}\n"+
                    $"DoctorName: {DoctorName}\n"+
                    $"Specialization: {Specialization}\n"+
                    $"ConsultationFee: {ConsultationFee}\n");

            }
        }

            public static void Main()
            {
                Doctor d1 = new Doctor
                {
                    DoctorId = 1111,
                    DoctorName = "Sushant",
                    Specialization = "Oncology",
                    ConsultationFee = 9999.99
                };
                d1.Display();
                Console.WriteLine(" ");
                Doctor d2 = new Doctor
                {
                    DoctorId = 2222,
                    DoctorName = "Ankita",
                    Specialization = "Neurology",
                    ConsultationFee = 4599
                };
                d2.Display();
            }
        
    }
}
