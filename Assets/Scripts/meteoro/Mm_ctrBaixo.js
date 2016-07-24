#pragma strict

var inversor = -1;
static var vel = 2;
var inicio = 12;
var fim = -12;

function Start () {

}

function Update () {
	
	transform.Translate(vel*Time.deltaTime*(-1),0,vel*Time.deltaTime*inversor);
	
	if(transform.position.z < -13.4 || transform.position.z > -6.2){
		inversor *= -1;
	}
	
	if(transform.position.x <= fim){
		transform.position.x = inicio;
	}
}

function OnTriggerEnter(objeto:Collider){
	if(objeto.CompareTag("nave")){
		controle.vida = controle.vida - 0.5;
		Destroy(gameObject);
	}
	
	if(objeto.CompareTag("tiro")){
		controle.pontos += 0.5;
		controle.nivel += 0.5;
		Destroy(gameObject);
	}
	if(objeto.CompareTag("meteoro") || objeto.CompareTag("meteoroMenor")){
		inversor *= -1;
	}
}