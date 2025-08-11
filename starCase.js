function staircase(n) {
    const gap=n
    const char="#"
  for(i=1;i<=n;i++)
{
    console.log(" ".repeat(gap-i)+char.repeat(i)+" ".repeat(gap-i))
    
    
}
}
staircase(4)