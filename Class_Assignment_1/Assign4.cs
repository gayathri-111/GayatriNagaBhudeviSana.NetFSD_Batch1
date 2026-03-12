using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Linq;

namespace Class_Assignment_1
{
    internal class Assign4
    {
        public class Appointment
        {
            public int AppointmentId;
            public string PatientName;
            public string DoctorName;
            public DateTime AppointmentDate;
            public Appointment()
            {
                DoctorName = "GeneralPhysician";
                AppointmentDate = new DateTime(2026, 3, 12);

            }
            public void display()
            {
                Console.WriteLine($"AppointmentId:{AppointmentId}\n " + $"PatientName:{PatientName}\n " +$"DoctorName: {DoctorName}\n"+$"AppointmentDate: {AppointmentDate}");
                
            }

        }
        public static void Main()
        {
            Appointment a = new Appointment();
            a.AppointmentId = 135565;
            a.PatientName = "MAdhhuri";

            a.display();

        }
    }
}
