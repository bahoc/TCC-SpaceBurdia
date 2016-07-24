#pragma strict

function Start () {

}

function Update () {
	transform.Translate(Time.deltaTime*(-1),0,0);
	
	if(transform.position.x <= -12.15){
		Destroy(gameObject);
	}
}

function OnTriggerEnter(objeto:Collider){
	if(objeto.CompareTag("nave")){
		if(controle.vida < 7){
			if(controle.vida <= 6){
				controle.vida += 1;
			} else {
				controle.vida += 0.5;
			}
		}
		Destroy(gameObject);
	}
}