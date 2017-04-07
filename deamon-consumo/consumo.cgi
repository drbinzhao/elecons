#!/usr/bin/perl

use POSIX;
use CGI;

$cgi = new CGI;
$id = $cgi->param('id');

#open (LOG, "$id.log");
#while (<LOG>) {
#    $last = "$_"
#}
#close (LOG);

$last = `tail -1 $id.log`;

print "Content-type: text/html\n\n\n";
print "$last";
