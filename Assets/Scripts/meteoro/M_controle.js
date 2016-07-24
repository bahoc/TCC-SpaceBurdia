#pragma strict

var som : AudioClip;
var explosao : Transform;
var meteoro_menor : Transform;
var meteoro_menorb : Transform;
var shield : Transform;
var inicio = 12;
var fim = -12;
static var vel = 0;
var vidaM = 3;
var direcao = 0;
var inversor = 1;

function Start () {
	
}

function Update () {
	
	transform.Translate(vel*Time.deltaTime*(-1),0,vel*Time.deltaTime*direcao*inversor);
	
	if(transform.position.x <= fim){
		transform.position.x = inicio;
		transform.position.z = Random.Range(-7,-12);
		direcao = Random.Range(-1, 2);
	}
	
	if(transform.position.z < -13.4 || transform.position.z > -6.2){
		inversor *= -1;
	}
}

function OnTriggerEnter(objeto:Collider){
	if(objeto.CompareTag("nave")){
		Instantiate(explosao,transform.position,transform.rotation);
		transform.position.x = inicio;
		transform.position.z = Random.Range(-7,-12);
		if(controle.vida > 1){
			controle.vida -= 1;
		}else{
			controle.vida -= 0.5;
		}
		direcao = Random.Range(-1, 2);
	}
	
	if(objeto.CompareTag("tiro")){
		GetComponent.<AudioSource>().PlayOneShot(som);
		if(transform.position.x <= 5.8){
			vidaM -= 1;
		if(vidaM <= 0){
				controle.pontos += 5;
				controle.nivel += 5;
				Instantiate(explosao,transform.position,transform.rotation);
				Instantiate(meteoro_menor,transform.position,transform.rotation);
				Instantiate(meteoro_menorb,transform.position,transform.rotation);
				if (Random.Range(1, 10) == 3){
					Instantiate(shield,transform.position,transform.rotation);
				}
				transform.position.x = inicio;
				transform.position.z = Random.Range(-7,-12);
				vidaM = 3;
				direcao = Random.Range(-1, 2);
			}
		}
	}
	
	if(objeto.CompareTag("meteoro")){
		inversor *= -1;
	}
}