#!/usr/bin/perl

use Time::HiRes qw(usleep nanosleep);

$conf = "consumo.cfg";
$minimo = 100; # Mínimo de consumo que en una vivienda no se daría

open (CONF, "$conf");
@conf = <CONF>;
close (CONF);

@conf1 = @conf;
@conf2 = @conf;
@arrayTotales = ("0");

foreach $linea(@conf1) {
    @device = split(/:/, $linea);
    $id = "$device[0]";
    next if ($id =~ /\#/);
    $log = "$id.log";
    $last = `tail -1 $log`;
    @acumulado = split(/:/, "$last");
    $acumulado = $acumulado[0];
    push @arrayTotales, "$acumulado";
}

$contador = 1;
while (1) {
    foreach $linea(@conf2) {
	$contador = 1 if ($contador > 5);
	@device = split(/:/, $linea);
	$id = "$device[0]";
	next if ($id =~ /\#/);
	$potencia = "$device[1]";
	$cadencia = "$device[2]";

	$log = "$id.log";
	$current = int(rand($potencia));
	if ($current < $minimo) { # Si no alcanza el mínimo de potencia pasamos al siguiente
	    $contador++;
	    next
	}
	$acumulado = $arrayTotales[$contador] + $current;
	$arrayTotales[$contador] = $acumulado;

	open (LOG, ">>$log");
	print LOG "$acumulado:$current\n";
	close (LOG);
	$cadencia = $cadencia * 1000000; # La pasamos a microsegundos
	usleep ($cadencia);
	$contador++;
    }
}
