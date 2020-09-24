const John_Team={
    score1:89,
    score2:120,
    score3:103,
    Avg_Score:function(){
        const Avg_scr=(this.score1+this.score2+this.score3)/3;
        return Avg_scr;
    }
};

console.log(John_Team.Avg_Score());

const Mike_Team={
    score1:116,
    score2:94,
    score3:123,
    Avg_Score:function(){
        const Avg_scr=(this.score1+this.score2+this.score3)/3;
        return Avg_scr;
    }
};

const Mary_Team={
    score1:150,
    score2:98,
    score3:123,
    Avg_Score:function(){
        const Avg_scr=(this.score1+this.score2+this.score3)/3;
        return Avg_scr;
    }
};


console.log(Mike_Team.Avg_Score());

if(Mike_Team.Avg_Score()>John_Team.Avg_Score())
{
    console.log('Mike Team is Winner');
}
else
{
    console.log(John_Team +' is Winner');
}