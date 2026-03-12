using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Security.Cryptography.X509Certificates;
using System.Text;

namespace Class_Assignment_1
{
    internal class Assign6
    {
        class Billing
        {
            public String PatientName;
            public int ConsultationFee;
            public int TestCharges;

            public void TotalBill(int ConsultationFee, int TestCharges)
            {
                
                int Total_Bill =  ConsultationFee + TestCharges;
                Console.WriteLine($"PatientName: {PatientName}" + Total_Bill);
            }
        }
        public static void Main()
        {
            Billing b = new Billing();
            b.PatientName = "Garvi";

            b.TotalBill(1000, 750);
        }

    }
}
