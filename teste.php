<?php

$search = filter_input(INPUT_GET, "name");

$arr = [
    ['id' => 1, 'email' => 'email@teste1'],
    ['id' => 2, 'email' => 'email@teste2'],
    ['id' => 3, 'email' => 'email@teste3'],
    ['id' => 4, 'email' => 'email@teste4'],
    ['id' => 5, 'email' => 'email@teste5'],
];

if(!empty($arr)){

    echo json_encode($arr);
}else{
    $arr ='Nenhum registro';
    echo json_encode($arr);
}

?>