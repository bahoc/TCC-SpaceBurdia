#pragma strict

var som : AudioClip;
var style : GUIStyle;

function Start () {
	
	controle.jogo = false;

}

function Update () {

	if (controle.jogo){
		transform.Translate(M_controle.vel*Time.deltaTime*(-1),0,0);
	}else{
		transform.Translate(2*Time.deltaTime*(-1),0,0);
	}
	
	if(transform.position.x <= -12.15){
		transform.position.x = 13.29;
	}
	
	if(controle.vida <= 0){
		GetComponent.<AudioSource>().PlayOneShot(som);
		StartCoroutine("GameOver");
	}
	
	if (Input.GetKey ("escape")) {
        Application.Quit();
    }
}

function GameOver (){
      yield WaitForSeconds(3);
	  Application.LoadLevel("gameover");
}

function OnGUI () {
	if(controle.jogo){
		style.fontSize = 32;
		style.normal.textColor = Color.white;
		GUI.Label (Rect (10, 10, 200, 80), "Shield: "+ controle.vida, style);
		GUI.Label (Rect (10, 50, 200, 80), "Pontos: "+ controle.pontos, style);
	}
}