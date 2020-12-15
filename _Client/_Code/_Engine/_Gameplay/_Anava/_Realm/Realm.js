export class Realm {
    static SetWorld(world){
        Realm.Updatables = [];
        Realm.World = world;
    }

    static CleanupWorld(){
        Realm.Updatables = null;
        delete Realm.World;
    }

    static Update(){
        Realm.Updatables.forEach((item) => {
            item.Update();
        })
    }

    static AddToUpdate(item){
        Realm.Updatables.push(item);
    }

    static RemoveFromUpdate(item) {
        let i = Realm.Updatables.indexOf(item);

        if (i !== -1){
            Realm.Updatables.splice(i, 1);
        }
    }
}