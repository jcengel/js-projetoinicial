export class SistemaAutenticar{
    static login(autenticavel, senha){
        if(SistemaAutenticar.ehAutenticavel(autenticavel)){

            return autenticavel.autenticar(senha);
        }
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && 
        autenticavel.autenticar instanceof Function;
    }
}