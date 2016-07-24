#pragma strict

var vel = 50;

function Start () {

}

function Update () {
	transform.Translate(Time.deltaTime*vel,0,0);
	if(transform.position.x >= 8){
		Destroy(gameObject);
	}
}

function OnTriggerEnter(objeto:Collider){
	if(objeto.CompareTag("meteoro") || objeto.CompareTag("meteoroMenor")){
		Destroy(gameObject);
	}
}