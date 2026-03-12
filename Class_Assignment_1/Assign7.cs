using System;
using System.Collections.Generic;
using System.Text;

namespace Class_Assignment_1
{
    internal class Assign7
    {
        public class Nurse
        {
            public int NurseId { get; set; }
            public string NurseName { get; set; }
            public String Department { get; set; }
        }
        public static void Main(string[] args)
        {
            Nurse n = new Nurse();
            n.NurseId = 2222;
            n.NurseName = "shanti";
            n.Department = "Oncology";
            Console.WriteLine(n.NurseId);
            Console.WriteLine(n.NurseName);
            Console.WriteLine(n.Department);


        }

    }
}
