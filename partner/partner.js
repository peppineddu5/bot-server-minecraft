const fs=require("fs")
const { MessageEmbed } = require('discord.js');

const content=fs.readFileSync(__dirname+"/data/allValue.txt","utf-8",()=>{
    
});
let saveData=eval(content)
const search=(arr,key)=>{
    for (let i = 0; i < arr.length; i++)
        if(arr[i][0]==key)
            return i
    return -1
}
const createArrayString=(arr)=>{
    let string=""
    string+="["
    for (let i = 0; i < arr.length; i++) {
        string+="["+"'"+arr[i][0]+"'"+","+arr[i][1]+"],"
    }
    string=string.slice(0, -1)
    string+="]"
    return string
}
const sort=(array) =>{
    let len = array.length;
    for (let i = 0; i < len; i++) { 
        for (let j = 0; j < len-1; j++) {
        console.log(j)
            if (array[j][1] > array[j + 1][1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    return array;
};
module.exports=(msg)=>{
    const index=search(saveData,msg.author.id)
       
    if (index==-1) {
        saveData.push([`${msg.author.id}`])
        saveData[saveData.length-1][1]=1
        
    }else{
        saveData[index][1]+=1
    }
    saveData=sort(saveData).reverse()
    fs.writeFile(__dirname + "/data/allValue.txt", createArrayString(saveData), 'utf-8', function (err) {
        if (err)
            throw err;
    });
    
    const newIndex=search(saveData,msg.author.id)

    const ok="<:emoji_28:954052639484698644>";
    const exampleEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(ok+'PARTNERSHIP ESEGUITA'+ok)
	.setDescription(`:pushpin:Eseguita da:<@${msg.author.id}>\n:pushpin:Partnership totali:${saveData[index][1]}\n:pushpin:In Classifica:${newIndex+1}\n`)
	.setImage('https://cdn.discordapp.com/attachments/937040618885091353/965541584684843018/GuAzJKIkSfBCTmOu-1.gif')
	.setTimestamp()
	.setFooter({ text: 'partnership eseguita', iconURL: 'https://cdn.discordapp.com/attachments/937040618885091353/965894086303313950/Picsart_22-01-29_19-01-37-177.png' });

    msg.channel.send({ embeds: [exampleEmbed] });
}