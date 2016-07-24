#pragma strict

var explosao: Transform;
static var jogo = false;
var vel = 5;
var tiro:Transform;
var bTiro:Transform;
var bEsquerda:Transform;
var bDireita:Transform;
var bCima:Transform;
var bBaixo:Transform;
static var vida = 5.0;
static var pontos = 0.0;
static var nivel = 0;
var tempoTiro = 0.1;

function Start () {
	
	vida = 5.0;
	pontos = 0.0;
	nivel = 0;
	M_controle.vel = 0;
	
}

function Update () {
	if(transform.position.z > -13.4){
		if(Input.GetKey("down") || touchBaixo.direcao == true){
			transform.Translate(0,0,vel*Time.deltaTime*(-1));
		}
	}
	
	if(transform.position.z < -6.2){
		if(Input.GetKey("up") || touchCima.direcao == true){
			transform.Translate(0,0,vel*Time.deltaTime);
		}
	}
	
	if(transform.position.x > -5.8){
		if(Input.GetKey("left")|| touchEsq.direcao == true){
			transform.Translate(vel*Time.deltaTime*(-1),0,0);    
		}
	}
	
	if(transform.position.x < 5.5){
		if(Input.GetKey("right") || touchDir.direcao == true){
			transform.Translate(vel*Time.deltaTime,0,0);
		}
	}
	
	if(Input.GetKey("z") || fire.fire == true){
		tempoTiro -= Time.deltaTime;
			jogo = true;
		if(tempoTiro <= 0){
			Instantiate(tiro,transform.position,transform.rotation);
			tempoTiro = 0.1;
		}
	}
	
	if(vida <= 0){
		Instantiate(explosao,transform.position,transform.rotation);
		Destroy(gameObject);
	}
	
	if(nivel >= 50){
		M_controle.vel += 1;
		Mm_controle.vel += 1;
		Mm_ctrBaixo.vel += 1;
		nivel = 0;
	}
}