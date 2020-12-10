export class Realm {
    static SetWorld(world){
        Realm.World = world;
    }

    static CleanupWorld(){
        delete Realm.World;
    }
}