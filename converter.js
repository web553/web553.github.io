  
var unit = [" ","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteeen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"];
var tens = [" ","Ten","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninty"];
var u,t,h,T,Te,m,Tm,Tb,TTr,Tq;
function OneD(num)
{
    return unit[num]
}

function TwoD(num)
{
    u = num%10;
    t = Math.floor(num/10);
    return (tens[t]+ " " + unit[u])
}

function ThreeD(num)
{
    var out = ""
    h=Math.floor(num/100);
    if(h!=0)
    out += unit[h]+" Hundered "
    if(num%100 <=19 && num%100>=0)
    {
        out += OneD(Math.floor(num%100));
    }
    else
    {
        out += TwoD(Math.floor(num%100));
    }
    return out
}
function FourD(num)
{
    var out=""
    out=OneD(Math.floor(num/1000));
    if(num/1000!=0)
    out+=" Thousand "
    out+=ThreeD(Math.floor(num%1000));
    return out
}
function FiveD( num)
{
    var out=""
    Te=Math.floor(num/1000);
    if(Te<=19)
    {
        out+=OneD(Te);
    }
    else
    {
        out+=TwoD(Te);
    }
    out+=" Thousand "
    out+=ThreeD(num%1000);
    return out
}
function SixD( num)
{
    var out=""
    out+=ThreeD(Math.floor(num/1000));
    if(num/1000!=0)
    out+=" Thousand "
    out+=ThreeD(num%1000);
    return out
}
function SevenD(num)
{
    var out=""
    out=OneD(Math.floor(num/1000000));
    if(num/1000000!=0)
    out+=" Million "
    out+=SixD(Math.floor(num%1000000));
    return out
}
function EightD(num)
{
    var out=""
    Tm=Math.floor(num/1000000);
    if(Tm<=19)
    {
        out+=OneD(Tm);
    }
    else
    {
        out+=TwoD(Tm);
    }
    out+=" Million "
    out+=SixD(Math.floor(num%1000000));
    return out
}
function NineD( num)
{
    var out=""
    out+=ThreeD(Math.floor(num/1000000));
    if(num/1000000!=0)
    out+=" Million "
    out+=SixD(num%1000000);
    return out
}
function TenD(num)
{
    var out=""
    out+=OneD(Math.floor(num/1000000000));
    if(num/1000000000!=0)
    out+=" Billion "
    out+=NineD(num%1000000000);
    return out
}
function ElevenD(num)
{
    var out=""
    Tb=Math.floor(num/1000000000);
    if(Tb<=19)
    {
        out+=OneD(Tb);
    }
    else
    {
        out+=TwoD(Tb);
    }
    out+=" Billion "
    out+=NineD(num%1000000000);
    return out
}
function TwelveD(num)
{
    var out=""
    out+=ThreeD(Math.floor(num/1000000000));
    if(num/1000000000!=0)
    out+=" Billion "
    out+=NineD(num%1000000000);
    return out
}
function ThirteenD( num)
{
    var out=""
    out+=OneD(Math.floor(num/1000000000000));
    if(num/1000000000000!=0)
    out+=" Trillion "
    out+=TwelveD(num%1000000000000);
    return out
}
function FourteenD(num)
{
    var out=""
    TTr=Math.floor(num/1000000000000);
    if(TTr<=19)
    {
        out+=OneD(TTr);
    }
    else
    {
        out+=TwoD(TTr);
    }
    out+=" Trillion "
    out+=TwelveD(num%1000000000000);
    return out
}
function FifteenD(num)
{
    var out=""
    out+=ThreeD(Math.floor(num/1000000000000));
    if(num/1000000000000!=0)
    out+=" Trillion "
    out+=TwelveD(num%1000000000000);
    return out
}
function SixteenD(num)
{
    var out=""
    out+=OneD(Math.floor(num/1000000000000000));
    if(num/1000000000000000!=0)
    out+=" Quandrillion "
    out+=FifteenD(num%1000000000000000);
    return out
}
function SeventeenD( num)
{
    var out=""
    Tq=Math.floor(num/1000000000000000);
    if(Tq<=19)
    {
        out+=OneD(Tq);
    }
    else
    {
        out+=TwoD(Tq);
    }
    out+=" Quadrillion "
    out+=FifteenD(num%1000000000000000);
    return out
}
function take_input()
{
    var num = document.getElementById('num').value
    if(num>=1 && num<=19)
    {
        var output = OneD(num);
        document.getElementById("out").innerHTML = output
        
    }
    else if(num>=20 && num<=99)
    {
        var output = TwoD(num);
        document.getElementById("out").innerHTML = output

    }
    else if(num>=100 && num<=999)
    {
        var output = ThreeD(num);
        document.getElementById("out").innerHTML = output

    }
    else if(num>=1000 && num<=9999)
    {
       var output = FourD(num);
        document.getElementById("out").innerHTML = output

    }
    else if(num>=10000 && num<=99999)
    {
       var output = FiveD(num);
        document.getElementById("out").innerHTML = output

    }
    else if(num>=100000 && num<=999999)
    {
        var output = SixD(num);
        document.getElementById("out").innerHTML = output

    }
    else if(num>=1000000 && num<=9999999)
    {
       var output = SevenD(num);
        document.getElementById("out").innerHTML = output

    }
    else if(num>=10000000 && num<=99999999)
    {
       var output = EightD(num);
        document.getElementById("out").innerHTML = output
    }
    else if(num>=100000000 && num<=999999999)
    {
        var output=NineD(num);
        document.getElementById("out").innerHTML = output
    }
    else if(num>=1000000000 && num<=9999999999)
    {
        var output=TenD(num);
        document.getElementById("out").innerHTML = output
    }
    else if(num>=10000000000 && num<=99999999999)
    {
        var output= ElevenD(num);
        document.getElementById("out").innerHTML = output
    }
    else if(num>=100000000000 && num<=999999999999)
    {
        var output= TwelveD(num);
        document.getElementById("out").innerHTML = output
    }
    else if(num>=1000000000000 && num<=9999999999999)
    {
        var output=ThirteenD(num);
        document.getElementById("out").innerHTML = output
    }
    else if(num>=10000000000000 && num<=99999999999999)
    {
        var output=FourteenD(num);
        document.getElementById("out").innerHTML = output
    }
    else if(num>=100000000000000 && num<=999999999999999)
    {
        var output=FifteenD(num);
        document.getElementById("out").innerHTML = output
    }
    else if(num>=1000000000000000 && num<=9999999999999999)
    {
        var output=SixteenD(num);
        document.getElementById("out").innerHTML = output
    }
    else if(num>=10000000000000000 && num<=99999999999999999)
    {
        var output=SeventeenD(num);
        document.getElementById("out").innerHTML = output
    }
    else
    {
        document.getElementById("out").innerHTML="Invalid!"
    }
}