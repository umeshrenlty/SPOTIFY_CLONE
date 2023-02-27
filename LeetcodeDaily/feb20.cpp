//search insert Position
#include<bits/stdc++.h>
using namespace std;
int main()
{
    int n;
    cout<<"enter the length of the array: ";
    cin>>n;
    vector<int> array;
    for(int i=0;i<n;i++)
    {
        int x;
        cin>>x;
        array.push_back(x);
    }
   for(int i=0;i<array.size();i++)
    {
        cout<<array[i]<< " ";
    }
  
return 0;

}