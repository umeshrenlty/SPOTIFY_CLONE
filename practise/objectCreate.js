const person=
{
    isHuman:false,
    printIntroduction:function()
    {
        console.log(`my name is ${this.name}.am i human? ${this.isHuman}`);

    }
};
const me= Object.create(person);
me.name="umesh sahoo";
me.isHuman=true;
me.printIntroduction();
