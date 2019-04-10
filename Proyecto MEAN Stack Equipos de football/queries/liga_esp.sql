-- 1) 
SELECT * FROM liga_esp.resultados_deportivos;

-- 1) dados 2 equipos, traer toda la información -- (nombre de c/u resultado, fecha, estadio)
SELECT * FROM liga_esp.resultados_deportivos
WHERE LOCAL='Real Racing Club' AND VISITANTE='Real Madrid C.F.' 
OR LOCAL='Real Madrid C.F.' AND VISITANTE='Real Racing Club';
 
 -- 2) Dado un equipo traer sus estadísticas: 
 SELECT * FROM liga_esp.resultados_deportivos WHERE LOCAL='Real Racing Club' OR VISITANTE='Real Racing Club';
