#pragma strict

var style : GUIStyle;
static var pontuacao = 0;
var mensagem: String;

function Start () {
	
	pontuacao = controle.pontos;
	
}

function Update () {
	
	if(pontuacao <= 0){
		mensagem = "Você realmente jogou o jogo?";
	}
	if(pontuacao > 0 && pontuacao < 100){
		mensagem = "Não foi nada impressionante ainda.";
	}
	if(pontuacao > 100 && pontuacao < 200){
		mensagem = "Tá começando a melhorar!";
	}
	if(pontuacao > 200 && pontuacao < 500){
		mensagem = "Tá bem, mas pode ser melhor.";
	}
	if(pontuacao > 500 && pontuacao < 650){
		mensagem = "Agora tá uma pontuação de respeito";
	}
	if(pontuacao > 650){
		mensagem = "Pelo jeito o jogo ficou muito facil, o céu é o limite agora.";
	}
	
	if (Input.GetKey ("escape")) {
        Application.Quit();
    }

}

function OnGUI () {
	style.alignment = TextAnchor.UpperCenter;
	style.fontSize = 32;
	style.normal.textColor = Color.white;
	GUI.Label (Rect (0, 20, Screen.width, 80), "Sua Pontuação Final foi: "+ pontuacao, style);
	GUI.Label (Rect (0, 60, Screen.width, 80), mensagem, style);
}