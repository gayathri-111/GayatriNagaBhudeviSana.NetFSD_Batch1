using System;
using System.Collections.Generic;
using System.Text;

namespace Class_Assignment_1
{
    internal class Assign8
    {
        class PatientRecord
        {
            public int PatientId {  get; set; }
            public string PatientName { get; set; } 
            public int Age {  get; set; }
            public string Disease {  get; set; }
            public static string HospitalName;

            public PatientRecord(int patientId, string patientName, int age, string disease)
            {
                PatientId = patientId;
                PatientName = patientName;
                Age = age;
                Disease = disease;
            }
            public void DisplayPatientRecord()
            {
                Console.WriteLine($"PatientId: {PatientId}\n" + $"PatientName: {PatientName}\n" + $"Age: {Age}\n" + $"Disease: {Disease}");
            }
        }
        public static void Main()
        {
            PatientRecord.HospitalName = "Manipal";
            PatientRecord pr = new PatientRecord(101, "Ravi", 40, "Fever");
            pr.DisplayPatientRecord();
        }
    }
}
