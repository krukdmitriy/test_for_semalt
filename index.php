<?php
function remove_duplicate_characters ($string)
{
    $a = preg_split("//u", $string);
    $b = array();
    foreach ($a as $v)
    {
        if (in_array($v, $b))
            continue;
        $b[] = $v;
    }
    return implode($b);
}

echo remove_duplicate_characters('fgff3wff3g99e9sfd');

function remove_duplicate_characters_v2 ($string)
{
    return join(array_unique(str_split($string)));
}

echo remove_duplicate_characters_v2('fgff3wff3g99e9sfd');

function reverseInt( $a )
{
    $tmp = $a;
    $return = 0;

    while( $tmp > 0 )
    {

        $return = ( $return * 10 ) + ( $tmp % 10 );

        $tmp = intval( $tmp / 10 );
    }

    return $return ;
}

echo reverseInt(250);