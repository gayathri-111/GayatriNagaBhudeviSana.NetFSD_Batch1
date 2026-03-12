using System;
using System.Collections.Generic;
using System.Text;

namespace Class_Assignment_1
{
    internal class Assign3
    {
        public class Hospital
        {
            public static string HospitalName;
            public static string HospitalAddress;
            public string PatientName;

            public void Display()
            {
                Console.WriteLine($"HospitalName: {HospitalName}\n" + $"HospitalAddress: {HospitalAddress}\n" + $"PatientName: {PatientName}\n");
            }

        }
        public static void Main()
        {
            Hospital.HospitalName = "Manipal";
            Hospital.HospitalAddress = "BlockA, 10th Lane, BanjaraHills";
            Hospital h1 = new Hospital() {PatientName = "Johnsena"};
            Hospital h2 = new Hospital() { PatientName = "Madhubala" };


            h1.Display();
            h2.Display();
        }

    }
}
