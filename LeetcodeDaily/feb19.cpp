//level order Traversal

#include<bits/stdc++.h>
using namespace std;
class node
{
    public:
    int data;
    node *left,*right;
};
void printCurrentLevel(node * root,int level,bool flag)
{
    if(root==NULL)
    return;
    if(level==1)
    {
        cout<<root->data<< " ";
    }
    else if(level>1 && flag==true)
    {
        flag=false;
        printCurrentLevel(root->left,level-1,flag);
        printCurrentLevel(root->right,level-1,flag);
        
    }
    else if(level>1 && flag==false)
    {
       flag=true;
        printCurrentLevel(root->right,level-1,flag);
          printCurrentLevel(root->left,level-1,flag);
       
    }
}
int height(node *root)
{
    if(root==NULL)
    return 0;
    return (max(height(root->left),height(root->left))+1);
}
void printLevelOrder(node * root)
{
    
    int h=height(root);
    cout<<h<<"hrhr";
     bool flag=true;
    for(int i=1;i<=h;i++)
    {
       
      printCurrentLevel(root,i,flag);
    }

}

node * newNode(int data)
{
    node* Node=new node();
    Node->data=data;
    Node->left=NULL;
    Node->right=NULL;
    return (Node);

}
int main()
{
    node* root=newNode(1);
    root->left=newNode(2);
    root->right=newNode(3);
    root->left->left=newNode(4);
    root->left->right=newNode(5);
    cout<<"Level order traversal of binary tree is=";
    printLevelOrder(root);

}