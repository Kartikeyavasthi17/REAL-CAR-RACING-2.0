class Player
{
    constructor(){
        this.name =null;
        this.distance =0;
        this.index =null;

    };

    getCount()
    {
        var PlayerCountRef =database.ref('playerCount')
        PlayerCountRef.on("value",(data)=>{
            playerCount =data.val();
        })
   }

    updateCount(count)
    {
        database.ref('/').update({
            playerCount:count
        })
    }

    update()
    {
        var playerIndex ="players/player"+this.index;
        database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
        })

    }

       static getPlayersInfo()
        {
            var PlayersInfoRef =database.ref('players')
            PlayersInfoRef.on("value",(data)=>
            {
                allPlayers =data.val();
            })

        }

}
