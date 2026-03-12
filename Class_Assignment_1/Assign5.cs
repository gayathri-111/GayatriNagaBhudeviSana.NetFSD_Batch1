using System;
using System.Collections.Generic;
using System.Text;

namespace Class_Assignment_1
{
    internal class Assign5
    {
        public class MedicalTest
        {
            public int TestId;
            public string TestName;
            public double TestCost;

            public MedicalTest(int testId, string testName, double testCost)
            {
                TestId = testId;
                TestName = testName;
                TestCost = testCost;
            }

            public void Display()
            {
                Console.WriteLine($"TestId: {TestId}\n" +
                                  $"TestName: {TestName}\n" +
                                  $"TestCost: {TestCost}\n");
            }
        }
        public static void Main()
        {
            MedicalTest test = new MedicalTest(101, "Blood Test", 500.00);
            test.Display();
        }


    }
    
}
