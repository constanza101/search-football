SELECT * FROM liga_esp.resultados_deportivos;
SELECT * FROM liga_esp.resultados_deportivos WHERE LOCAL='Real Racing Club' OR VISITANTE='Real Racing Club';

-- 1) dados 2 equipos, traer toda la información -- (nombre de c/u resultado, fecha, estadio)
SELECT * FROM liga_esp.resultados_deportivos
WHERE LOCAL='Real Racing Club' AND VISITANTE='Real Madrid C.F.' 
OR LOCAL='Real Madrid C.F.' AND VISITANTE='Real Racing Club';
 
 -- 2) Dado un equipo traer sus estadísticas: 
 
 -- A) partidos jugados: 
SELECT COUNT(TEMPORADA)
FROM liga_esp.resultados_deportivos
WHERE LOCAL='Real Racing Club' OR VISITANTE='Real Racing Club';

-- B) partidos ganados: 
SELECT COUNT(TEMPORADA)
FROM liga_esp.resultados_deportivos
WHERE LOCAL='Real Racing Club' AND GOL_LOCAL > GOL_VISITANTE
OR VISITANTE='Real Racing Club' AND GOL_LOCAL < GOL_VISITANTE;

-- C) partidos empatados:
SELECT COUNT(TEMPORADA)
FROM liga_esp.resultados_deportivos
WHERE LOCAL='Real Racing Club' AND GOL_LOCAL = GOL_VISITANTE
OR VISITANTE='Real Racing Club' AND GOL_LOCAL = GOL_VISITANTE;

-- D) goles a favor totales: 
WITH total AS(
	SELECT GOL_LOCAL FROM liga_esp.resultados_deportivos WHERE LOCAL='Real Racing Club' AND TEMPORADA = '1928-29'
	UNION ALL
	SELECT GOL_VISITANTE FROM liga_esp.resultados_deportivos WHERE VISITANTE = 'Real Racing Club'
             )
SELECT sum(GOL_LOCAL)
FROM total

-- D) goles en contra por temporada: 
WITH total AS(
	SELECT GOL_VISITANTE FROM liga_esp.resultados_deportivos WHERE LOCAL='Real Racing Club' AND TEMPORADA = '1928-29'
	UNION ALL
	SELECT GOL_LOCAL FROM liga_esp.resultados_deportivos WHERE VISITANTE = 'Real Racing Club' AND TEMPORADA = '1928-29'
             )
SELECT sum(GOL_LOCAL)
FROM total




