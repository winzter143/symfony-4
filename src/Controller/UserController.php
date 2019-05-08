<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;


/**
 * Description of UserController
 *
 * @author xei
 */
class UserController extends AbstractController{
    /**
     * @Route("/users", name="user")
     */
    public function index()
    {
        return $this->render('user/index.html.twig', [
            'controller_name' => 'XXXXAboutController',
        ]);
    }
    /**
     * @Route("/users/registration", name="user_registration")
     */
    public function registration()
    {
        return $this->render('user/registration.html.twig', [
            'controller_name' => 'XXXXAboutController',
        ]);
    }
}
