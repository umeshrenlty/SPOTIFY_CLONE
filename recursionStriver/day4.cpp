/*
1.REVERSE A NUMBER
2.A STRING IS PALINDROME OR NOT
*/

/*REVERSE A NUMBER
#include<bits/stdc++.h>
using namespace std;
void f(int arr[],int i,int n)
{
    if(i>=n/2)
    {
        return;
    }
    swap(arr[i],arr[n-i-1]);
    f(arr,i+1,n);

}
int main()
{
    int n;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++)
    {
        cin>>arr[i];
    }
    f(arr,0,n);
    for(int i=0;i<n;i++)
    {
        cout<<arr[i]<<" ";
    }
    return 0;
}*/
/*2.A STRING IS PALINDROME OR NOT*/
#include<bits/stdc++.h>
using namespace std;
bool palindrome(int arr[],int i,int n)
{
    if(i>=n/2)
    {
        return true;
    }
    if(arr[i]!=arr[n-i-1]){
    return false;}
   return palindrome(arr,i+1,n);
  
}
int main()
{
    int n;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++)
    {
        cin>>arr[i];
    }
    cout<<palindrome(arr,0,n)<<" ";
 
    return 0;
}