#pragma strict

var style : GUIStyle;

function Start () {

}

function Update () {

	if (controle.jogo){
		transform.Translate(M_controle.vel*Time.deltaTime*(-1),0,0);
	}else{
		transform.Translate(2*Time.deltaTime*(-1),0,0);
	}
	
	if(transform.position.x <= -24){
		transform.position.x = 24;
	}
	
	for(var i:int = 0; i < Input.touches.Length; i++){
		var touch: Touch = Input.touches[i];
		var ray = Camera.main.ScreenPointToRay(Input.GetTouch(i).position);
		var hit: RaycastHit = new RaycastHit();
		
		if(Physics.Raycast(ray,hit,1000)){
			if(hit.collider.gameObject == this.gameObject){
				switch(touch.phase){
					case TouchPhase.Ended:
						fire.fire = false;
					break;
					case TouchPhase.Moved:
						touchBaixo.direcao = false;
						touchCima.direcao = false;
						touchEsq.direcao = false;
						touchDir.direcao = false;
					break;
				}
			}
		}
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