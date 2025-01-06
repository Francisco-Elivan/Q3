
function obterTurnoAtual() {

  function converterParaMinutos(horaString) {
  const [horas, minutos] = horaString.split(':').map(Number);
  return horas * 60 + minutos;
}

  var horarioJornada = {
    turno1_inicio: '06:00',//306
    turno1_fim: '15:48',   //948
    turno2_inicio: '15:48',//948
    turno2_fim: '01:09',   //69
    turno3_inicio: '01:09',//59
    turno3_fim: '06:00',   //360
    turno3_segunda: '00:00',  //0
    turno3_sabado_fim: '10:36'//636
  };

  var agora = new Date();
  var horaAtual = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  // convertendo hora atual do Sistema para minutos
 var minutosAtuais = converterParaMinutos(horaAtual);
//  var minutosAtuais = 0;
   var diaSemana = agora.getDay() 
   var semana = ['dom','seg','ter','qua','qui','sex','sab']
  
  // Convertemos os horários dos turnos para minutos
  var turno1Inicio = converterParaMinutos(horarioJornada.turno1_inicio);
  var turno1Fim = converterParaMinutos(horarioJornada.turno1_fim);
  var turno2Inicio = converterParaMinutos(horarioJornada.turno2_inicio);
  var turno2Fim = converterParaMinutos(horarioJornada.turno2_fim);
  var turno3Inicio = converterParaMinutos(horarioJornada.turno3_inicio);
  var turno3Fim = converterParaMinutos(horarioJornada.turno3_fim);
  var turnoSegundaInicio = converterParaMinutos
    (horarioJornada.turno3_segunda)
  var turnoSabadoFim = converterParaMinutos
    (horarioJornada.turno3_sabado_fim)
  
  // Verificamos em qual turno a hora atual se encaixa
  if(diaSemana == 1 && minutosAtuais >= turnoSegundaInicio && minutosAtuais < turno3Fim){
   return 'Turno 3'
  }else if(diaSemana == 6 && minutosAtuais >= turno3Inicio && minutosAtuais <=
  turnoSabadoFim){
    return 'Turno 3'
  }
  else if (minutosAtuais >= turno1Inicio && minutosAtuais < turno1Fim) {
    return 'Turno 1';
  } else if (minutosAtuais >= turno2Inicio || minutosAtuais < turno2Fim) {
    return 'Turno 2';
  } else if (minutosAtuais >= turno3Inicio || minutosAtuais < turno3Fim) {
    return 'Turno 3';
  } 

  return 'Fora do horário dos turnos';
}

 export default {obterTurnoAtual}






