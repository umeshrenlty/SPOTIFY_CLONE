// fibonaci series date=feb 10 9:19
#include <iostream>
using namespace std;
int fibo(int n)
{
    if (n <= 1)
    {
        return n;
    }
    else
    return (fibo(n - 1) + fibo(n - 2));
}
int main()
{

    int n;
    cout << "enter the number" << endl;
    cin >> n;

    cout << fibo(n) << endl;
    return 0;
}